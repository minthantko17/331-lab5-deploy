import type { MessageState } from '@/types'
import { defineStore } from 'pinia'

export const useMessageStore = defineStore('messge',{
    state: (): MessageState => ({
        message: '',
        detailMessage: ''
    }),
    actions: {
        updateMessage(message: string): void {
            this.message = message
        },
        resetMessage(): void{
            this.message = ''
        },
        updateDetailMessage(detailMessage: string): void{
            this.detailMessage=detailMessage
        },
        resetDetailMessage(): void{
            this.detailMessage=''
        }
    }
})