const Content = () => {

    const handleNameChange = () => {
    const names = ['Bishal', 'Dhiraj', 'Sachin'];
    const int = Math.floor(Math.random()*3);
    console.log(int);
    return names[int];
  }
    return (
        <main>
            Hello {handleNameChange()}!
        </main>
    );
}

export default Content;