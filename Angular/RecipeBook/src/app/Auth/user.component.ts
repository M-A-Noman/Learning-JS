
export class User{
    constructor(
        public email: string,
        public id: string,
        private _token: string,
        private _tokenExpirationDate:Date
    ) { }
    get Token() {
        // console.log(this.Token);
        if (!this._token || new Date() > this._tokenExpirationDate) {

            return null;
        }
        return this._token;
    }
}