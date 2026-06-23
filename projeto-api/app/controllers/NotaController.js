import NotaModel from '../models/NotaModel.js';
import AlunoModel from '../models/AlunoModel.js';
import MateriaModel from '../models/MateriaModel.js';

class NotaController {
  async index(req, res) {
    const notas = await NotaModel.findAll({
      include: [
        { model: AlunoModel, as: 'aluno' },
        { model: MateriaModel, as: 'materia' }
      ]
    });
    return res.json(notas);
  }

  async show(req, res) {
    const nota = await NotaModel.findByPk(req.params.id, {
      include: [
        { model: AlunoModel, as: 'aluno' },
        { model: MateriaModel, as: 'materia' }
      ]
    });
    return res.json(nota);
  }

  async store(req, res) {
    const { aluno_id, materia_id, nota } = req.body;
    const aluno = await AlunoModel.findByPk(aluno_id);
    const materia = await MateriaModel.findByPk(materia_id);
    if (!aluno || !materia) return res.status(404).json({ error: 'Aluno ou matéria não encontrado' });

    const registro = await NotaModel.create({ aluno_id, materia_id, nota });
    return res.json(registro);
  }

  async update(req, res) {
    const registro = await NotaModel.findByPk(req.params.id);
    if (!registro) return res.status(404).json({ error: 'Nota não encontrada' });
    await registro.update(req.body);
    return res.json(registro);
  }

  async delete(req, res) {
    const registro = await NotaModel.findByPk(req.params.id);
    if (!registro) return res.status(404).json({ error: 'Nota não encontrada' });
    await registro.destroy();
    return res.json({ message: 'Nota removida' });
  }

  // Lista alunos com as matérias vinculadas (visão N:N)
  async alunosComMaterias(req, res) {
    const alunos = await AlunoModel.findAll({
      include: { model: MateriaModel, as: 'materias', through: { attributes: ['id', 'nota'] } }
    });
    return res.json(alunos);
  }
}

export default new NotaController();
