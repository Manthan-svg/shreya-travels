import os
import re

directory = '.'

for filename in os.listdir(directory):
    if filename.endswith('.html'):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Add class="form-control" if missing from input, select, textarea
        content = re.sub(r'<input(?![^>]*class="[^"]*form-control)([^>]*)>', r'<input class="form-control"\1>', content)
        content = re.sub(r'<select(?![^>]*class="[^"]*form-control)([^>]*)>', r'<select class="form-control"\1>', content)
        content = re.sub(r'<textarea(?![^>]*class="[^"]*form-control)([^>]*)>', r'<textarea class="form-control"\1>', content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
