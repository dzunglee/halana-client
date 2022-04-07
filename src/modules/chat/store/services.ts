import Service from 'core/service'

export class ChatService extends Service {
  public getMe() {
    return this.post('/customer/ei/getInfo')
  }
}
