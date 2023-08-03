export class Note {
  id: number;
  title: string;
  body: string;
  category: string;
  createdDate: string;
  mentionedDates: string[];
  archived: boolean;

  constructor(
    id: number,
    title: string,
    body: string,
    category: string,
    createdDate?: string,
    archived?: boolean
  ) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.category = category;
    this.createdDate = createdDate || this.getCreatedDate();
    this.mentionedDates = this.getMentionedDates(body);
    this.archived = archived || false;
  }

  private getCreatedDate(): string {
    const date = new Date();
    return date.toLocaleDateString("en-GB");
  }

  private getMentionedDates(body: string): string[] {
    const dateRegex = /\d{1,2}([/.-])\d{1,2}\1\d{4}/g;
    const dates = body.match(dateRegex);
    return dates ? dates : [];
  }
}
