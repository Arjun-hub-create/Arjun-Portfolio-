#!/bin/bash
# Run this from the folder containing your unzipped photos

DEST="src/assets/projects"

echo "📸 Setting up project photos..."

mkdir -p "$DEST/sentinel" "$DEST/golf" "$DEST/focusflow" "$DEST/talkify" "$DEST/commerce"

# Sentinel
cp "Sentinel photo 1.png"   "$DEST/sentinel/sentinel1.png" 2>/dev/null
cp "Sentinel Photo 2.png"   "$DEST/sentinel/sentinel2.png" 2>/dev/null
cp "Sentinel photo 3.png"   "$DEST/sentinel/sentinel3.png" 2>/dev/null
cp "Sentinel photo 4.png"   "$DEST/sentinel/sentinel4.png" 2>/dev/null
cp "Sentinel photo 5.png"   "$DEST/sentinel/sentinel5.png" 2>/dev/null
cp "Sentinel photo 6.png"   "$DEST/sentinel/sentinel6.png" 2>/dev/null

# Golf
cp "golf heroes photo1.png"    "$DEST/golf/golf1.png" 2>/dev/null
cp "golf heroes photo 2.png"   "$DEST/golf/golf2.png" 2>/dev/null
cp "Golf herores photo 3.png"  "$DEST/golf/golf3.png" 2>/dev/null
cp "golf heroes photo 4.png"   "$DEST/golf/golf4.png" 2>/dev/null
cp "Golf heroes photo 5.png"   "$DEST/golf/golf5.png" 2>/dev/null

# FocusFlow
cp "Focus Flow Photo 1.png"  "$DEST/focusflow/focus1.png" 2>/dev/null
cp "Focusflow Photo 2.png"   "$DEST/focusflow/focus2.png" 2>/dev/null
cp "Focusflow photo 3.png"   "$DEST/focusflow/focus3.png" 2>/dev/null
cp "Focusflow photo 4.png"   "$DEST/focusflow/focus4.png" 2>/dev/null
cp "Focusflow photo 5.png"   "$DEST/focusflow/focus5.png" 2>/dev/null

# Talkify
cp "talkify photo 1.png"  "$DEST/talkify/talkify1.png" 2>/dev/null
cp "talkify photo 2.png"  "$DEST/talkify/talkify2.png" 2>/dev/null
cp "talkify photo 3.png"  "$DEST/talkify/talkify3.png" 2>/dev/null

# Commerce
cp "Commerce Photo 1.png"  "$DEST/commerce/commerce1.png" 2>/dev/null
cp "Commerce photo 2.png"  "$DEST/commerce/commerce2.png" 2>/dev/null
cp "Commerce Photo 3.png"  "$DEST/commerce/commerce3.png" 2>/dev/null
cp "Commerce photo 4.png"  "$DEST/commerce/commerce4.png" 2>/dev/null
cp "commerce photo 5.png"  "$DEST/commerce/commerce5.png" 2>/dev/null
cp "Commerce phtot 6.png"  "$DEST/commerce/commerce6.png" 2>/dev/null

echo "✅ Photos placed! Run: npm run dev"
