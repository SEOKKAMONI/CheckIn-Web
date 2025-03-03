import { useGetLecturesByStatus } from "@/queries/Lecture/query";
import { LectureTagBox } from "@checkin/ui";
import React from "react";

interface Props {
  status: string;
  lectureIdList: number[];
  onChangeLectureIdList: (id: number) => void;
  grade: number;
}

const LecturesList = ({
  status,
  onChangeLectureIdList,
  lectureIdList,
  grade,
}: Props) => {
  const { data } = useGetLecturesByStatus({ status, grade });

  return (
    <>
      {data?.data.map((data) => (
        <LectureTagBox
          key={data.lectureId.value}
          grade={data.acceptableStudent.targetGrade}
          lectureTag={data.lectureTag}
          people={data.enrollStudent}
          place={data.placeType}
          teacher={data.lectureTeacher.teacherId.value}
          title={data.lectureName}
          isSelect={lectureIdList.includes(data.lectureId.value) ? true : false}
          onSelect={() => onChangeLectureIdList(data.lectureId.value)}
          type="Enrol"
        />
      ))}
    </>
  );
};

export default LecturesList;
