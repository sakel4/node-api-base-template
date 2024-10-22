interface IBaseDao<T> {
    create: (model: T) => Promise<T>;
    update: (id: number, model: T) => Promise<T>;
    delete: (id: number) => Promise<boolean>;
    getAll: () => Promise<T[]>;
    getById: (id: number) => Promise<T | null>;
}

export default IBaseDao;
