

const utilizeScroll = () => {
    const elRef = React.createRef();
    const executeScroll = () => elRef.current.scrollIntoView();
  
    return { executeScroll, elRef };
  };
  class ScrollDemo extends Component {
    constructor(props) {
      super(props);
      this.elScroll = utilizeScroll();
    }
    componentDidMount() {
      this.elScroll.executeScroll();
    }}

    export default utilizeScroll;