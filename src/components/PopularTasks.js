import React from 'react';
import { Image, Divider, Icon } from 'semantic-ui-react';
import '../style/Popular_Tasks.scss';

class PopularTasks extends React.Component{

   constructor(props){
     super(props)

     this.state = {
       count: 0
     };
   };

   arrayOfImages = [
    <Image src={'../src/style/images/carpentry.jpeg'} size='medium' />,
    <Image src={'../src/style/images/fix_light_fixture.jpeg'} size='small' />,
    <Image src={'../src/style/images/noodle_fish.jpeg'} size='medium' />,
    <Image src={'../src/style/images/painting_walls.jpg'} size='medium' />,
    <Image src={'../src/style/images/plant_flowers.jpeg'} size='medium' />,
    <Image src={'../src/style/images/remove_radiation.jpeg'} size='medium' />,
    <Image src={'../src/style/images/washing_floors.jpg'} size='medium' />
  ];

  incrementCount = () => {
    const { count } = this.state;
    if(count >= 4){
      this.setState({ count: 4 });
    } else{
      this.setState({
        count: this.state.count + 1
      });
    }
  };

  decrementCount = () => {
    const { count } = this.state;
    if(count <= 0){
      this.setState({ count: 0 });
    } else{
      this.setState({
        count: this.state.count - 1
      });
    }
  }

  render(){
    const {count} = this.state;
    return(
     <div className={"popular-tasks-container"}>
       <div onClick={this.decrementCount}>
         <Icon
          className={"angle left"}
          id={"count-button"}
          size={"large"}>
         </Icon>
        </div>
         {this.arrayOfImages[0 + count]}
         <Divider hidden />
         {this.arrayOfImages[1 + count]}
         <Divider hidden />
         {this.arrayOfImages[2 + count]}
         <Divider hidden />
        <div onClick={this.incrementCount}>
          <Icon
           className={"angle right"}
           id={"count-button"}
           size={"large"}>
          </Icon>
        </div>
      </div>
    )
  };
}

export default PopularTasks;
