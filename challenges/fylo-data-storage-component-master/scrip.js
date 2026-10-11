
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".storage__button");

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.multiple = true;
  fileInput.accept = "*/*";
  fileInput.hidden = true;

  document.body.appendChild(fileInput);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      fileInput.click();
    });
  });

  fileInput.addEventListener("change", () => {
    const files = Array.from(fileInput.files);

    if (files.length === 0) return;

    console.log("Selected files:");

    files.forEach((file) => {
      console.log({
        name: file.name,
        type: file.type || "Unknown",
        size: `${(file.size / 1024).toFixed(2)} KB`
      });
    });

    alert(
      files.length === 1
        ? `File selected: ${files[0].name}`
        : `${files.length} files selected successfully.`
    );

    fileInput.value = "";
  });
});
