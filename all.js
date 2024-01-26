const { exec } = require('child_process');




// get all path in to sh/ folder
const fs = require('fs');
const path = require('path');
const shPath = path.join(__dirname, 'sh');
const shFiles = fs.readdirSync(shPath);
const shFilesPath = shFiles.map(file => path.join(shPath, file));
console.log(shFilesPath);











/*

// Fonction pour exécuter un script shell avec des arguments
function runShellScript(scriptPath, args, callback) {
  // Construire la commande en incluant les arguments 
  const cmd = `${scriptPath} ${args.join(' ')}`;

  // Exécuter la commande
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Stdout: ${stdout}`);
    if(callback) {
      callback(stdout);
    }
  });
}

// Exemple d'utilisation de la fonction
const scriptPath = '/path/to/your/script.sh';
const args = ['arg1', 'arg2', 'arg3']; // Remplacer par vos arguments réels

runShellScript(scriptPath, args, (output) => {
  console.log('Script executed with output:', output);
});



// Assurez-vous que le script que vous exécutez a les permissions nécessaires pour être exécuté (chmod +x script.sh pour le rendre exécutable).
*/