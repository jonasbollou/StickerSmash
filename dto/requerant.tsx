

export class Requerant {
  id: number;
  fullname: string;
  type: string;

  constructor(data: any) {
    this.id = data.ParticipantsPageList[0].Id;
    this.fullname = data.ParticipantsPageList[0].FullName;
    this.type = data.ParticipantsPageList[0].Type;
  }
}