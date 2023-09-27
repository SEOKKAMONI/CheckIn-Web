import * as S from "./style";
import { ProfileIcon } from "@checkin/icon";
import { Flex } from "@checkin/ui";
import { AbsenseStudentBox } from "./types";
import dataTransform from "@checkin/uitl/util/dataTransform";

export const AbsenceStudentList = ({
  children,
  grade,
  name,
  number,
  reason,
  room,
}: AbsenseStudentBox) => {
  return (
    <S.AbsenceStudentListContainer>
      <Flex gap={15} align="center">
        <S.AbsenceStudentProfileBox>
          <ProfileIcon />
        </S.AbsenceStudentProfileBox>
        <Flex direction="column" gap={6}>
          <Flex gap={5}>
            <S.AbsensedStudentName>{name}</S.AbsensedStudentName>
            <S.AbsensedStudentInfoText>
              {dataTransform.schoolInfoTransform(grade, room, number)}
            </S.AbsensedStudentInfoText>
          </Flex>
          <S.AbsensedReasonText>{`사유 : ${reason}`}</S.AbsensedReasonText>
        </Flex>
      </Flex>
      {children}
    </S.AbsenceStudentListContainer>
  );
};