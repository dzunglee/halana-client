interface IMessageHandle {
  close: () => void
}
type IMessageOptions = {
  customClass?: string
  center?: boolean
  dangerouslyUseHTMLString?: boolean
  duration?: number
  iconClass?: string
  id?: string
  message?: string | VNode
  offset?: number
  onClose?: () => void
  showClose?: boolean
  type?: 'success' | 'warning' | 'info' | 'error' | ''
  zIndex?: number
}
type MessageType = 'success' | 'warning' | 'info' | 'error' | ''
type IMessageDispatcher = (options?: IMessageOptions | string) => IMessageHandle
type MessageParams = IMessageOptions | string
type TypedMessageParams<T extends MessageType> =
  | ({
      type: T
    } & Omit<IMessageOptions, 'type'>)
  | string

interface IMessage {
  (options?: MessageParams): IMessageHandle
  success: (options?: TypedMessageParams<'success'>) => IMessageHandle
  warning: (options?: TypedMessageParams<'warning'>) => IMessageHandle
  info: (options?: TypedMessageParams<'info'>) => IMessageHandle
  error: (options?: TypedMessageParams<'error'>) => IMessageHandle
  closeAll(): void
}

interface RouterAbility {
  name: string
  title: string
}

interface Message {
  content?: string
  seenAt?: date
  createdAt?: date
  senderId?: number
  type?: 'customer' | 'supplier'
}

interface Conversation {
  id?: number
  name?: string
  image?: string
  unreadCount?: number
  message?: Message
}

interface Profile {
  id?: number
  name?: string
  avatar?: string
}
