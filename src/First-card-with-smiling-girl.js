import './First-card-with-smiling-girl';
import questionMark from './question-mark.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function smilingGirl() {
    return (<div class="row p-0 m-0" style="
          background-color: rgb(0, 140, 255);
          border-radius: 30px;
        ">
        <div class="col-7 " style="height: 650px;">
            <img src="assets/girl 6.png" class="" alt="" srcset=""
                style="width:500px ; height: 640px; margin-left: 100px; margin-top: 10px;" />
        </div>
        <div class="col-5">
            <p
                style="font-size: 40px; text-align: right; font-weight: bolder; margin-top: 40px; margin-right: 60px; float: right; color: white; width: 100;">
                ALL YOUR <br />
                THOUGHTS<br />
                AND IDEAS<br />SHARED IN <br />
                ONE <span style="color:#F9EE4E ;">LINK.</span>
            </p>
            <p style="color:#F9EE4E ; text-align: right; float: right; margin-right: 60px;">With just one click,you
                can sell yourself to anybody
                <br />
                anywhere, join multiple users today and start your <br />collect
                Journey
            </p>
            <div style="width:100%">
                <a href="">
                    <button class="btn "
                        style="background-color:#F9EE4E ; float: right; margin-right: 60px; border-radius: 15px;">Get
                        Started</button>
                </a>
            </div>
            <div id="question-mark" style=" margin-left: 370px; width:80px; height:5px;">
                <a href="" target="_blank">
                    {questionMark}
                </a>
            </div>
        </div>
    </div>)
};

export default smilingGirl;