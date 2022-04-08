import env from 'core/env'
import Service from 'core/service'

export class ChatService extends Service {
  public getMe() {
    return this.post(env('VITE_GET_PROFILE', ''))
  }
  public getConversations() {
    return this.get('conversations')
  }
  public getMessages(params: { [key: string]: any }) {
    return this.get('messages', params)
  }
  public sendMessage(params: { [key: string]: any }) {
    return this.post('messages', params)
  }
  public createConversation(params: { [key: string]: any }) {
    return this.post('conversations', params)
  }
}
