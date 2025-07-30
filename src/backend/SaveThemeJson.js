import { writeFile, readFile } from "fs/promises";
import { dialog } from "electron";

export default {
  saveThemeJson: async function (e, content) {
    const { canceled, filePath } = await dialog.showSaveDialog({
      title: "Save theme",
      filters: [{name: 'json', extensions: ['json']}]
    });
    if (!canceled) {
      writeFile(filePath, JSON.stringify(content));
    }
  },
  importThemeJson: async function () {
    const { canceled, filePath } = await dialog.showSaveDialog({
      title: "Open theme",
       filters: [{name: 'json', extensions: ['json']}]
    });
    if (!canceled) {
      return readFile(filePath);
    }
    return {}
  },
};
