const setWelcomeMessage = () => {
    const username = prompt('Please enter your name:');
    alert(`Hello, ${username || 'Guest'}! We're glad to have you here.`);
  };
  
  export default setWelcomeMessage;
  