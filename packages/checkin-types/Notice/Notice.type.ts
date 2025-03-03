import { Response } from "@checkin/types";

export interface NoticeType {
  noticeId: {
    value: number;
  };
  noticeStatus: string;
  content: string;
  createdAt: string;
}

export interface NoticeResponse extends Response {
  data: NoticeType[];
}
