export class CollegueParticipant {

  constructor(
      public email?: string,
      public password?: string,
      public firstname?: string,
      public lastname?: string,
      public pictureURL?: string,
      public npPlusRemainingVotes?: number,
      public npMinusRemainingVotes?: number) {

  }

  }

export class CollegueParticipantVotes {
    constructor( public firstName?: string,
                 public lastName?: string,
                 public photoUrl?: string) {

    }
  }

