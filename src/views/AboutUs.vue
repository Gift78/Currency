<script setup></script>

<template>
  <div class="about-us">
    <h1>About Us</h1>
    <p>
      กลุ่มของพวกเราคือ การรวมกลุ่มเพื่อจัดทำ Project และเรียนรู้การใช้ VueJS
      เพื่อที่จะสามารถนำความรู้ที่ได้จากภายในห้องเรียนมาประยุกต์
      ปรับใช้และเพื่อส่งเสริมความรู้ความเข้าใจของทางกลุ่มผ่านการศึกษานอกเวลา
      และทางกลุ่มของพวกเราคิดว่า
      "ระบบการคำนวณแปลงค่าสกุลเงินมีการทำงานที่ไม่ซับซ้อนเกินไป"
      ทางกลุ่มจึงคิดที่จะนำระบบการคำนวณแปลงค่าสกุลเงินมาต่อยอดกับ VueJS
      จนเกิดเป็น Project: "Currency Exchange" !!!
    </p>
    <h2>Meet Our Team</h2>
    <div class="team">
      <div class="member">
        <img src="/images/our team/ratchapon.jpg" alt="Member 1" />
        <h3>Ratchapon Sangonwong</h3>
        <p>64130500070</p>
      </div>
      <div class="member">
        <img src="/images/our team/waristha.jpg" alt="Member 1" />
        <h3>Waristha Chanwanphen</h3>
        <p>64130500075</p>
      </div>
      <div class="member">
        <img src="/images/our team/wimonsiri.jpg" alt="Member 2" />
        <h3>Wimonsiri Wongchun</h3>
        <p>64130500078</p>
      </div>
      <div class="member">
        <img src="/images/our team/aunchalee.jpg" alt="Member 3" />
        <h3>Aunchalee Sripan</h3>
        <p>64130500089</p>
      </div>
      <div class="member">
        <img src="/images/our team/jasda.png" alt="Member 4" />
        <h3>Jasda Chotinun</h3>
        <p>64130500097</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-us {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;
}

p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
}

.team {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.member {
  text-align: center;
  width: 120px;
  height: 120px;
  margin: 5px;
}

img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
}
</style>
