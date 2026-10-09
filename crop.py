from PIL import Image
import numpy as np

# 1. Crop UTEN
img_uten = Image.open(r"C:\Users\kanad\.gemini\antigravity\brain\67fac7ea-9535-41b2-b0bf-44755dfa4f79\.user_uploaded\media_1791563351214.png")
# UTEN is a yellow banner in the middle. Let's find the yellow rows.
# Yellow in RGB is roughly (255, 255, 0)
arr_uten = np.array(img_uten.convert("RGB"))
# Find rows where there is a significant amount of yellow
# Yellow condition: R>200, G>200, B<100
is_yellow = (arr_uten[:, :, 0] > 200) & (arr_uten[:, :, 1] > 200) & (arr_uten[:, :, 2] < 100)
# Sum across columns
yellow_rows = np.sum(is_yellow, axis=1)
# Find first and last row with substantial yellow (> 10% of width)
width = arr_uten.shape[1]
yellow_row_indices = np.where(yellow_rows > width * 0.1)[0]

if len(yellow_row_indices) > 0:
    top = yellow_row_indices[0]
    bottom = yellow_row_indices[-1]
    # Crop the image (take full width)
    uten_cropped = img_uten.crop((0, top, width, bottom)).convert("RGB")
    uten_cropped.save(r"C:\Users\kanad\OneDrive\Desktop\Shreya Travels\images\uten-logo.jpg")
else:
    print("Failed to find yellow region for UTEN.")

# 2. Crop IAAI
img_iaai = Image.open(r"C:\Users\kanad\.gemini\antigravity\brain\67fac7ea-9535-41b2-b0bf-44755dfa4f79\.user_uploaded\media_1791563359192.png")
# IAAI has a white background. The logo is roughly in the center.
arr_iaai = np.array(img_iaai.convert("RGB"))
# Find non-white pixels
# White condition: R>240, G>240, B>240
is_not_white = (arr_iaai[:, :, 0] < 240) | (arr_iaai[:, :, 1] < 240) | (arr_iaai[:, :, 2] < 240)
# Ignore the top and bottom UI elements of the phone (like status bar, search bar).
# Let's say top 15% and bottom 15% are ignored.
h, w = arr_iaai.shape[:2]
is_not_white[:int(h*0.15), :] = False
is_not_white[int(h*0.85):, :] = False

non_white_rows = np.sum(is_not_white, axis=1)
non_white_cols = np.sum(is_not_white, axis=0)

row_indices = np.where(non_white_rows > w * 0.05)[0] # at least 5% of width has non-white
col_indices = np.where(non_white_cols > h * 0.05)[0]

if len(row_indices) > 0 and len(col_indices) > 0:
    top = row_indices[0]
    bottom = row_indices[-1]
    left = col_indices[0]
    right = col_indices[-1]
    
    # Add a little padding
    pad = 20
    top = max(0, top - pad)
    bottom = min(h, bottom + pad)
    left = max(0, left - pad)
    right = min(w, right + pad)
    
    iaai_cropped = img_iaai.crop((left, top, right, bottom)).convert("RGB")
    iaai_cropped.save(r"C:\Users\kanad\OneDrive\Desktop\Shreya Travels\images\iaai-logo.jpg")
else:
    print("Failed to find crop region for IAAI.")

print("Crop complete.")
