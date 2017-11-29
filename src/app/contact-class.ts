export class ContactClass {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public address: string,
    public town: string,
    public postcode: string,
    public phone: number,
    public email: string,
    public phonebrand: string,
    public message: string,
    public address2?: string // optional param can not follow required
  ) {}
}
