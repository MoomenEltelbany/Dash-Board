// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Start the backup manager active class
let backupBoxes = document.querySelectorAll(
    ".backup-package .backup-package-box"
);

backupBoxes.forEach((box) => {
    box.onclick = () => {
        backupBoxes.forEach((box) => {
            box.classList.remove("active");
        });
        box.classList.add("active");
    };
});
// End the backup manager active class
