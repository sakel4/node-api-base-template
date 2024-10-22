interface IBaseRepository<T> {
    findMany: (filter: any, session?: any) => Promise<T[]>;
    findById: (id: string, session?: any) => Promise<T | null>;
    findOne: (filter: any, session?: any) => Promise<T | null>;
    insertOne: (data: T, session?: any) => Promise<T>;
    updateOne: (data: T, session?: any) => Promise<T>;
}

export default IBaseRepository;
