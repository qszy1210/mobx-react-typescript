export class  ExportInstance{
  constructor() {

  }
  name: string = "inClass";

  init() {
    this.name = "in init";
  }
  
  
}
export default new ExportInstance();