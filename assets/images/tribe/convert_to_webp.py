from PIL import Image
import os

# 🔹 Set your folder path
folder_path = r"C:\Users\Pc\Documents\GitHub\UpdateRSSM\RSSM\assets\images\tribe"

# 🔹 Allowed image formats
allowed_exts = (".jpg", ".jpeg", ".png", ".bmp", ".tiff")

# 🔹 Loop through files in the folder
for root, _, files in os.walk(folder_path):
    for filename in files:
        if filename.lower().endswith(allowed_exts):  # Check if it's an image
            old_path = os.path.join(root, filename)
            new_filename = os.path.splitext(filename)[0] + ".webp"  # Keep name, change extension
            new_path = os.path.join(root, new_filename)

            try:
                # Open image and convert to WebP
                with Image.open(old_path) as img:
                    img.save(new_path, "WEBP", quality=85)  # Adjust quality if needed

                # 🔴 OPTIONAL: Remove the original image after conversion
                os.remove(old_path)

                print(f"Converted: {filename} → {new_filename}")

            except Exception as e:
                print(f"❌ Error converting {filename}: {e}")

print("✅ All images converted to WebP successfully!")
