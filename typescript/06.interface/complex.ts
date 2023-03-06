(() => {

    interface IClient {
        name: string,
        age?: number,
        address: IAddress,
        GetFullAddress(): string
    }

    interface IAddress {
        id: number,
        zip: string,
        city: string
    }

    const client: IClient = {
        name: 'Duddley',
        age: 60,
        address: {
            id: 125,
            zip: 'S39923',
            city: 'Ottawa'
        },
        GetFullAddress(){
            return this.address.city
        }
    }

    // console.log(client)

})();