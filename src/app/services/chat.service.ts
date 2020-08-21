import { Chat } from '../models/db/chat';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Message } from '../models/translate/message';
import { Member } from '../models/db/member';
import { CryptService } from 'src/app/services/crypt.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private db: AngularFireDatabase, private cryptService: CryptService) {}

  create(roomId: string): Promise<Boolean> {
    const chat: Chat = { lasttime: new Date().getTime().toString(), members: [], messages: [], active: true };
    const promise = this.db.object(`chats/${roomId}`).set(chat);
    return promise
      .then((_) => true)
      .catch((err) => {
        console.log(err, 'You dont have access!');
        return false;
      });
  }

  hasRoom(roomId: string): Observable<boolean> {
    return new Observable((observer) => {
      this.db
        .list<Chat>(`chats/${roomId}`)
        .valueChanges()
        .subscribe((chats) => {
          observer.next(chats.length > 0);
          observer.complete();
        });
    });
  }

  getMessages(roomId: string): Observable<Array<Message>> {
    return this.db.list(`chats/${roomId}/messages`).valueChanges() as Observable<Array<Message>>;
  }

  sendMessage(roomId: string, message: Message): string {
    message.text = this.cryptService.encrypt(message.text);
    message.translation = this.cryptService.encrypt(message.translation);
    return this.db.list(`chats/${roomId}/messages`).push(message).key;
  }

  addMember(roomId: string, newMembers: Member): string {
    return this.db.list(`chats/${roomId}/members`).push(newMembers).key;
  }

  getMembers(roomId: string): Observable<Array<Member>> {
    return this.db.list(`chats/${roomId}/members`).valueChanges() as Observable<Array<Member>>;
  }

  deleteMember(roomId: string, key: string) {
    return this.db
      .list(`chats/${roomId}/members/${key}`)
      .remove()
      .then((_) => true)
      .catch((err) => {
        console.log(err, 'You dont have access!');
        return false;
      });
  }

  updateMemberStatus(roomId: string, key: string, active: boolean): Promise<Boolean> {
    return this.db
      .object(`chats/${roomId}/members/${key}/active`)
      .set(active)
      .then((_) => true)
      .catch((err) => {
        console.log(err, 'You dont have access!');
        return false;
      });
  }

  delete(roomId: string): Promise<Boolean> {
    const promise = this.db.object(`chats/${roomId}`).remove();
    return promise
      .then((_) => true)
      .catch((err) => {
        console.log(err, 'You dont have access!');
        return false;
      });
  }

  getChatStatus(roomId: string): Observable<boolean> {
    return this.db.object(`chats/${roomId}/active`).valueChanges() as Observable<boolean>;
  }

  updateChatStatus(roomId: string, active: boolean): Promise<Boolean> {
    return this.db
      .object(`chats/${roomId}/active`)
      .set(active)
      .then((_) => true)
      .catch((err) => {
        console.log(err, 'You dont have access!');
        return false;
      });
  }
}
