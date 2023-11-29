import bcrypt from "bcrypt";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { Subject } from "./models/subject.model.js";
import { User } from "./models/user.model.js";
import { Assignment } from "./models/assignment.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const passwordLogPath = path.join(__dirname, "passwords.log");

console.log(passwordLogPath)
const courseTypes = ["학기", "일교", "공교", "전공", "전필", "전선"];

const firstNames = [
  "지훈",
  "현우",
  "서준",
  "도윤",
  "하준",
  "지호",
  "준서",
  "예빈",
  "준우",
  "시우",
  "유준",
  "지우",
  "지후",
  "윤서",
  "서연",
  "민영",
  "준호",
  "유찬",
  "지환",
  "윤우",
  "민준",
  "재윤",
  "서진",
  "시윤",
  "도준",
  "세아",
  "유빈",
  "민지",
  "정훈",
  "연서",
  "유나",
  "소영",
];

const lastNames = [
  "김",
  "이",
  "박",
  "최",
  "정",
  "성",
  "강",
  "조",
  "윤",
  "장",
  "임",
  "오",
  "한",
  "신",
  "서",
  "권",
  "황",
  "안",
  "송",
  "류",
  "홍",
  "고",
  "진",
  "허",
];

function generateRandomPassword() {
  const length = 8;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  let password = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset[Math.floor(Math.random() * n)];
  }
  return password;
}

const getRandomKoreanName = () => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return lastName + firstName;
};

const MAX_CONCURRENT_SAVES = 100;

async function assignSubjectsToUsers(users, subjects) {
  const saveQueue = [];

  for (let user of users) {
    const numSubjects = Math.floor(Math.random() * (7 - 4)) + 4;

    let availableSubjects = [...subjects];

    while (user.subjects.length < numSubjects && availableSubjects.length > 0) {
      let subjectIndex = Math.floor(Math.random() * availableSubjects.length);
      let subject = availableSubjects[subjectIndex];

      if (subject.users.length < subject.capacity) {
        user.subjects.push(subject._id);
        subject.users.push(user._id);

        saveQueue.push(subject.save());

        if (saveQueue.length >= MAX_CONCURRENT_SAVES) {
          await Promise.allSettled(saveQueue);
          saveQueue.length = 0;
        }

        availableSubjects.splice(subjectIndex, 1);
      } else {
        availableSubjects.splice(subjectIndex, 1);
      }
    }

    saveQueue.push(user.save());
    if (saveQueue.length >= MAX_CONCURRENT_SAVES) {
      await Promise.allSettled(saveQueue);
      saveQueue.length = 0;
    }
  }

  if (saveQueue.length > 0) {
    await Promise.allSettled(saveQueue);
  }
}

async function assignAssignmentsToSubjects(subjects, assignments) {
  const saveQueue = [];

  for (let subject of subjects) {
    // 수정: 각 Subject에 할당할 과제 수를 고정값으로 변경 (여기서는 3개로 가정)
    const numAssignments = 3;

    // assignments 배열을 복제하여 사용
    let availableAssignments = [...assignments];

    for (let i = 0; i < numAssignments; i++) {
      // assignments 배열에서 랜덤하게 하나 선택
      let assignment = availableAssignments[Math.floor(Math.random() * availableAssignments.length)];

      // Assuming there is a proper relationship field in the Assignment model
      // e.g., assignment.subjectsLimit or something similar
      if (assignment.subjects.length < assignment.capacity) {
        subject.assignments.push(assignment._id);
        assignment.subjects.push(subject._id);

        saveQueue.push(assignment.save());

        if (saveQueue.length >= MAX_CONCURRENT_SAVES) {
          await Promise.allSettled(saveQueue);
          saveQueue.length = 0;
        }

        // 사용된 assignment을 배열에서 제거
        availableAssignments = availableAssignments.filter(a => a !== assignment);
      }
    }

    saveQueue.push(subject.save());
    if (saveQueue.length >= MAX_CONCURRENT_SAVES) {
      await Promise.allSettled(saveQueue);
      saveQueue.length = 0;
    }
  }

  if (saveQueue.length > 0) {
    await Promise.allSettled(saveQueue);
  }
}

export const initData = async () => {
  const startHourOptions = [1.0, 2.0, 3.0, 4.0]; // 가장 빠른 시작 시간
  const endHourOptions = [2.0, 3.0, 4.0, 5.0] ; // 가장 늦은 종료 시간
  const lectureDateOptions = ["월,수", "화,금", "화,수", "수,금", "월,화", "화,목", "월", "화", "수", "목", "금"];
  const lectureRoomOptions = ["경영관 L307", "정보문화관 Q201", "정보문화관 Q202", "정보문화관 P403", "정보문화관 P401", "사회과학관 M202",
"사회과학관 M304", "사회과학관 M407", "경영관 MBA203", "원흥관 E317", "학술문화관 K309", "학술문화관 K352", "혜화관 514", "혜화관 512"];
  const absentCountOptions = [0, 1, 2];
  const lateCountOptions = [0, 1, 2];
  const nothandleCountOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  let subjects = [];
  for (let i = 0; i < 10; i++) {
    const credit = Math.floor(Math.random() * 3) + 1;
    const classification =
      courseTypes[Math.floor(Math.random() * courseTypes.length)];
    const capacity = Math.floor(Math.random() * (41 - 20)) + 20;
    const startHour =
      startHourOptions[Math.floor(Math.random() * startHourOptions.length)];
    const endHour =
      endHourOptions[Math.floor(Math.random() * endHourOptions.length)];
    const lecture_time = `${startHour} - ${endHour}`;
    const lecture_date =
      lectureDateOptions[
        Math.floor(Math.random() * lectureDateOptions.length)
      ];
    const lecture_room =
      lectureRoomOptions[
        Math.floor(Math.random() * lectureRoomOptions.length)
      ];
    const absent_count =
      absentCountOptions[
        Math.floor(Math.random() * absentCountOptions.length)
      ];
    const late_count =
      lateCountOptions[
        Math.floor(Math.random() * lateCountOptions.length)
      ];
    const nothandle_count =
      lateCountOptions[
        Math.floor(Math.random() * nothandleCountOptions.length)
      ];
    let newSubject = new Subject({
      name: `Subject-${i}`,
      credit,
      classification,
      capacity,
      lecture_time,
      lecture_date,
      lecture_room,
      absent_count,
      late_count,
      nothandle_count,
    });
    await newSubject.save();
    subjects.push(newSubject);
  }
  console.log(subjects)

  let users = [];
  for (let i = 0; i < 10; i++) {
    const username = getRandomKoreanName();
    const email =
      "2023" +
      String(Math.floor(Math.random() * 10 ** 6)).padStart(6, "0") +
      "@dgu.co.kr";
    const password = generateRandomPassword();
    const hashedPassword = bcrypt.hashSync(password, 10);

    fs.appendFileSync(passwordLogPath, `${username} ${email} ${password}\n`);

    let newUser = new User({
      username,
      email,
      password: hashedPassword,
      isAdmin: false,
      tokenExpiration: 0,
    });

    await newUser.save();
    users.push(newUser);
    console.log(i)
  
  const assignmentStatusOptions = ["미제출", "제출 완료"];
  const assignmentDateOptions = ["2023-12-05", "2023-12-09", "2023-12-12", "2023-12-15", "2023-12-20", "2023-12-18", "2023-12-31"];
  
  let assignments = [];
  for (let i = 0; i < 10; i++) {
    const assignment_status =
      assignmentStatusOptions[
        Math.floor(Math.random() * assignmentStatusOptions.length)
      ];
    const assignment_date =
      assignmentDateOptions[
        Math.floor(Math.random() * assignmentDateOptions.length)
      ];
    const capacity = Math.floor(Math.random() * (41 - 20)) + 20;

    let newAssignment = new Assignment({
      assignment_name: `Assignment-${i}`,
      capacity,
      assignment_status,
      assignment_date,
    });
    await newAssignment.save();
    assignments.push(newAssignment);
  }
  console.log(assignments)

  await assignSubjectsToUsers(users, subjects);
  await assignAssignmentsToSubjects(subjects, assignments);

  }
};