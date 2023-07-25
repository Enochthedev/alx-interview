#!/bin/bash

# Loop through all files in the current directory
for file in *; do

  # Check if the file is a regular file
  if [ -f "$file" ]; then

    # Remove carriage return characters from the file (convert Windows-style line endings to Unix-style)
    tr -d '\r' < "$file" > "$file.tmp" && mv "$file.tmp" "$file"

  fi

done
