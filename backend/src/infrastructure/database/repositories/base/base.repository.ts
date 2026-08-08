import { Model, ModelStatic } from "sequelize";

export abstract class BaseRepository<T extends Model> {
  constructor(protected model: ModelStatic<T>) {}

  async findAll(): Promise<T[]> {
    return this.model.findAll();
  }

  async findById(id: number): Promise<T | null> {
    return this.model.findByPk(id);
  }

  async create(data: object): Promise<T> {
    return this.model.create(data as any);
  }

  async update(id: number, data: object): Promise<T | null> {
    const record = await this.model.findByPk(id);

    if (!record) {
      return null;
    }

    return record.update(data);
  }

  async delete(id: number): Promise<boolean> {
    const count = await this.model.destroy({
      where: { id } as any,
    });

    return count > 0;
  }
}