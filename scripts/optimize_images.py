"""
Image optimization script for Torres Apex Esperilla.
Converts all JPGs to WebP (high quality) with smart resizing.

Rules (from responsive-images SKILL):
  - Hero images (Apex V1, V2, Lobby): max 1920px wide, quality 85
  - Render/amenities (large renders): max 1600px wide, quality 82
  - Floor plans (Planta): max 1200px wide, quality 85
  - Target: hero < 200KB, others < 150KB each

Usage:
  python scripts/optimize_images.py
"""

import os
from pathlib import Path
from PIL import Image

# ── Config ─────────────────────────────────────────────────────────────────────
IMAGES_DIR = Path(__file__).parent.parent / "public" / "images"
WEBP_QUALITY = 85       # 80-90 = high quality, good compression
METHOD = 6              # Pillow WebP method (0=fast, 6=slowest/best compression)

# Max widths per category (height scales proportionally)
HERO_MAX_W    = 1920    # Apex V1, V2
RENDER_MAX_W  = 1600    # Room renders, amenities
PLAN_MAX_W    = 1200    # Floor plans

# Keywords to detect category
HERO_KEYWORDS  = ["apex v1", "apex v2", "lobby"]
PLAN_KEYWORDS  = ["planta"]

# ── Helpers ────────────────────────────────────────────────────────────────────
def get_max_width(name_lower: str) -> int:
    if any(k in name_lower for k in HERO_KEYWORDS):
        return HERO_MAX_W
    if any(k in name_lower for k in PLAN_KEYWORDS):
        return PLAN_MAX_W
    return RENDER_MAX_W


def resize_if_needed(img: Image.Image, max_width: int) -> Image.Image:
    w, h = img.size
    if w > max_width:
        ratio = max_width / w
        new_h = int(h * ratio)
        return img.resize((max_width, new_h), Image.LANCZOS)
    return img


def bytes_to_kb(path: Path) -> float:
    return round(path.stat().st_size / 1024, 1)


# ── Main ───────────────────────────────────────────────────────────────────────
def main():
    jpg_files = sorted(IMAGES_DIR.glob("*.jpg")) + sorted(IMAGES_DIR.glob("*.JPG"))
    
    if not jpg_files:
        print("No JPG files found in", IMAGES_DIR)
        return

    print(f"\n{'File':<45} {'Original':>10} {'WebP':>10} {'Savings':>10}")
    print("─" * 80)
    
    total_original = 0
    total_webp = 0

    for jpg_path in jpg_files:
        webp_path = jpg_path.with_suffix(".webp")
        name_lower = jpg_path.name.lower()
        max_w = get_max_width(name_lower)

        with Image.open(jpg_path) as img:
            # Convert CMYK/palette to RGB if needed
            if img.mode not in ("RGB", "RGBA"):
                img = img.convert("RGB")

            img = resize_if_needed(img, max_w)
            img.save(webp_path, "WEBP", quality=WEBP_QUALITY, method=METHOD)

        orig_kb  = bytes_to_kb(jpg_path)
        webp_kb  = bytes_to_kb(webp_path)
        savings  = round((1 - webp_kb / orig_kb) * 100, 1)
        total_original += orig_kb
        total_webp     += webp_kb

        print(f"{jpg_path.name:<45} {orig_kb:>9.1f}K {webp_kb:>9.1f}K {savings:>9.1f}%")

    print("─" * 80)
    total_savings = round((1 - total_webp / total_original) * 100, 1)
    print(f"{'TOTAL':<45} {total_original:>9.1f}K {total_webp:>9.1f}K {total_savings:>9.1f}%")
    print(f"\n✅ Done — {len(jpg_files)} images converted to WebP in {IMAGES_DIR}\n")


if __name__ == "__main__":
    main()
