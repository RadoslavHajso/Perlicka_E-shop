## E-shop Update Log

### Date: 2025-10-29
### Update: Added Hungarian language option to the Czech webpage

[Visit web Perlička.sk](https://www.perlickashop.cz/)

####  Modified / Added Files
- **assets/scss/blocks/_header.scss**
  - Added minor responsive adjustments for the language switcher.
  - No structural changes, only improved layout for mobile view.

- **critical.css / critical.min.css**
  - Added a new link/icon for the Hungarian flag in the language switcher section.

- **critical.js**
  - Added a new DOM entry for the Hungarian language in the dropdown menu.

- **icons/flag_hu.svg**
  - Created a new SVG flag icon for the Hungarian language option.

####  Notes
- All changes were manually deployed via FTP.  
- Backup of original files is stored in `/Lang_switcher/backup/`.  
- Changed source files are hidden and not publicly available in this repository for simplicity reason.
- Or visit `/Lang_switcher/Test/` for local test.