

export class BaseDataService {
    /** PROTECTED PROPERTIES */
    protected url = '';
    protected rootUrl = '';

    constructor() {
        this.url = 'https://pokeapi.co/api/v2';
        this.rootUrl = 'https://pokeapi.co/api/v2';
    }
}
