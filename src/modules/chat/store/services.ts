import Service from 'core/service'

export class ChatService extends Service {
  public getMe() {
    return this.post('/customer/ei/getInfo')
  }
  public getConversations() {
    return this.get('conversations')
  }
  public getMessages(id: number) {
    return this.post('messages', id)
  }
  public sendMessage(message: Message) {
    return this.post('messages', message)
  }
  public createConversation(receiverId: Message, type: string) {
    return this.post('messages', { receiverId, type })
  }
}
