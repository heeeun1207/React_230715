import React, { Component } from 'react';
import { signUp } from '../api/userApi';

class SignUpComponent extends Component {
  constructor(props) {
    super(props);

    // 사용자 입력을 위한 상태 변수 초기화
    this.state = {
      userId: '',
      password: '',
      userName: '',
      email: '',
      mobile: '',
    };
  }

  // 각 입력 필드에 대한 핸들러 메서드
  handleUserIdChange = (event) => {
    this.setState({ userId: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleUserNameChange = (event) => {
    this.setState({ userName: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleMobileChange = (event) => {
    this.setState({ mobile: event.target.value });
  };

  // 회원 가입 버튼 클릭 핸들러
  handleSignUp = async () => {
    const userData = {
      userId: this.state.userId,
      password: this.state.password,
      userName: this.state.userName,
      email: this.state.email,
      mobile: this.state.mobile,
    };

    try {
      const response = await signUp(userData);
      console.log('회원 가입 성공:', response);
      // 회원 가입 성공 시 필요한 동작 수행
    } catch (error) {
      console.error('회원 가입 오류:', error.message);
      // 회원 가입 실패 시 에러 처리
    }
  };

  render() {
    return (
      <div>
        <h2>회원 가입</h2>
        <div>
          <label htmlFor="userId">아이디:</label>
          <input
            type="text"
            id="userId"
            value={this.state.userId}
            onChange={this.handleUserIdChange}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="userName">이름:</label>
          <input
            type="text"
            id="userName"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="mobile">휴대폰 번호:</label>
          <input
            type="tel"
            id="mobile"
            value={this.state.mobile}
            onChange={this.handleMobileChange}
          />
        </div>
        <button onClick={this.handleSignUp}>회원 가입</button>
      </div>
    );
  }
}

export default SignUpComponent;
