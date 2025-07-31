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
      return true
    }
    return false
  },
  importThemeJson: async function () {
    const { canceled, filePaths } = await dialog.showOpenDialog({
      title: "Open theme",
       filters: [{name: 'json', extensions: ['json']}]
    });
    
    if (!canceled) {
      //console.log(await readFile(filePaths[0], "utf8"));
      
      return JSON.parse(await readFile(filePaths[0], "utf8"));
    }
    return false
  },
};
