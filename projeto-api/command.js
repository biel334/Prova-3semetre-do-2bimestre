import 'dotenv/config';
import { execSync } from 'child_process';

const [,, command] = process.argv;

if (command === 'migrate') {
  console.log('Executando migrations...');
  try {
    const output = execSync('npx sequelize-cli db:migrate', { stdio: 'pipe' });
    console.log(output.toString());
    console.log('Migrations executadas com sucesso!');
  } catch (err) {
    console.error('Erro ao executar migrations:');
    console.error(err.stderr?.toString() || err.message);
    process.exit(1);
  }
} else if (command === 'migrate:undo') {
  console.log('Revertendo última migration...');
  try {
    const output = execSync('npx sequelize-cli db:migrate:undo', { stdio: 'pipe' });
    console.log(output.toString());
    console.log('Migration revertida com sucesso!');
  } catch (err) {
    console.error('Erro ao reverter migration:');
    console.error(err.stderr?.toString() || err.message);
    process.exit(1);
  }
} else {
  console.log('Comandos disponíveis:');
  console.log('  node command.js migrate        - Executa todas as migrations');
  console.log('  node command.js migrate:undo   - Reverte a última migration');
}