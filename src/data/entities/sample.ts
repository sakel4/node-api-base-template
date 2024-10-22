class Sample {
    id: string;
    description: string;


    constructor(sample: Partial<Sample>) {
        Object.assign(this, sample);

        // maybe some logic here to validate the object
    }

    getId() {
        return this.id;
    }

    getDescription() {
        return this.description;
    }

    setId(id: string) {
        this.id = id;
    }

    setDescription(description: string) {
        this.description = description;
    }
}
