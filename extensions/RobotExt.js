class RobotExtension extends Autodesk.Viewing.Extension {
    constructor(viewer, options) {
        super(viewer, options);
        this.viewer = viewer;
        this.tree = this.viewer.model.getData().instanceTree;

        this.defaultState = null;

        this.customize = this.customize.bind(this);
        this.createUI = this.createUI.bind(this);
        this.setTransformation = this.setTransformation.bind(this);

        this.getFragmentWorldMatrixByNodeId = this.getFragmentWorldMatrixByNodeId.bind(this);
        this.assignTransformations = this.assignTransformations.bind(this);
        this.findNodeIdbyName = this.findNodeIdbyName.bind(this);
    }

    load() {
        console.log('RobotExtension is loaded!');

        //Start custom code here ...
        this.customize();
        this.createUI();
        this.setTransformation();

        return true;
    }

    unload() {
        console.log('RobotExtension is now unloaded!');
        this.viewer.restoreState(this.defaultState);

        return true;
    }

    setTransformation() {
        let tree = this.tree;
        


        /* ====================== right 0 ================= */
        let ID_BaseRod = 4846;
        let ID_LowerArmBody = 4846;

        let Pivot_BaseRod = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        let Position_BaseRod = this.getFragmentWorldMatrixByNodeId(ID_BaseRod).matrix[0].getPosition().clone();
        //print the returned value from getFragmentWorldMatrixByNodeId method and using this we can inspect the....
        // output of the fucntion(method) whether working or not
        console.log(Position_BaseRod);
        Pivot_BaseRod.position.x = 0;
        Pivot_BaseRod.position.y = Position_BaseRod.y;
        Pivot_BaseRod.position.z = Position_BaseRod.z;
        viewer.impl.scene.add(Pivot_BaseRod);

        let Helper_LowerArmBody = new THREE.Mesh();
        let Position_LowerArmBody = this.getFragmentWorldMatrixByNodeId(ID_LowerArmBody).matrix[0].getPosition().clone();
        Helper_LowerArmBody.position.x = - Position_LowerArmBody.x + Math.abs(Position_LowerArmBody.x - Pivot_BaseRod.position.x);
        Helper_LowerArmBody.position.y = - Position_LowerArmBody.y + Math.abs(Position_LowerArmBody.y - Pivot_BaseRod.position.y);
        Helper_LowerArmBody.position.z = - Position_LowerArmBody.z + Math.abs(Position_LowerArmBody.z - Pivot_BaseRod.position.z);
        Pivot_BaseRod.add(Helper_LowerArmBody);
        console.log(Position_LowerArmBody);

        
         // /* ====================== right 1  ================= */
        let ID_BaseRod1 = 4853;
        let ID_LowerArmBody1 = 4853;

        let Pivot_BaseRod1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        let Position_BaseRod1 = this.getFragmentWorldMatrixByNodeId(ID_BaseRod1).matrix[0].getPosition().clone();
        //print the returned value from getFragmentWorldMatrixByNodeId method and using this we can inspect the....
        // output of the fucntion(method) whether working or not
        console.log(Position_BaseRod1);
        Pivot_BaseRod1.position.x = 0;
        Pivot_BaseRod1.position.y = Position_BaseRod1.y;
        Pivot_BaseRod1.position.z = Position_BaseRod1.z;
        viewer.impl.scene.add(Pivot_BaseRod1);

        let Helper_LowerArmBody1 = new THREE.Mesh();
        let Position_LowerArmBody1 = this.getFragmentWorldMatrixByNodeId(ID_LowerArmBody1).matrix[0].getPosition().clone();
        Helper_LowerArmBody1.position.x = - Position_LowerArmBody1.x + Math.abs(Position_LowerArmBody1.x - Pivot_BaseRod1.position.x);
        Helper_LowerArmBody1.position.y = - Position_LowerArmBody1.y + Math.abs(Position_LowerArmBody1.y - Pivot_BaseRod1.position.y);
        Helper_LowerArmBody1.position.z = - Position_LowerArmBody1.z + Math.abs(Position_LowerArmBody1.z - Pivot_BaseRod1.position.z);
        Pivot_BaseRod1.add(Helper_LowerArmBody1);
        console.log(Position_LowerArmBody1);

       
         // /* ====================== right 2 ================= */
        let ID_BaseRod2 = 4860;
        let ID_LowerArmBody2 = 4860;

        let Pivot_BaseRod2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        let Position_BaseRod2 = this.getFragmentWorldMatrixByNodeId(ID_BaseRod2).matrix[0].getPosition().clone();
        //print the returned value from getFragmentWorldMatrixByNodeId method and using this we can inspect the....
        // output of the fucntion(method) whether working or not
        console.log(Position_BaseRod2);
        Pivot_BaseRod2.position.x = 0;
        Pivot_BaseRod2.position.y = Position_BaseRod2.y;
        Pivot_BaseRod2.position.z = Position_BaseRod2.z;
        viewer.impl.scene.add(Pivot_BaseRod2);

        let Helper_LowerArmBody2 = new THREE.Mesh();
        let Position_LowerArmBody2 = this.getFragmentWorldMatrixByNodeId(ID_LowerArmBody2).matrix[0].getPosition().clone();
        Helper_LowerArmBody2.position.x = - Position_LowerArmBody2.x + Math.abs(Position_LowerArmBody2.x - Pivot_BaseRod2.position.x);
        Helper_LowerArmBody2.position.y = - Position_LowerArmBody2.y + Math.abs(Position_LowerArmBody2.y - Pivot_BaseRod2.position.y);
        Helper_LowerArmBody2.position.z = - Position_LowerArmBody2.z + Math.abs(Position_LowerArmBody2.z - Pivot_BaseRod2.position.z);
        Pivot_BaseRod2.add(Helper_LowerArmBody2);
        console.log(Position_LowerArmBody2);

         // /* ====================== right 3 ================= */
        let ID_BaseRod3 = 4867;
        let ID_LowerArmBody3 = 4867;

        let Pivot_BaseRod3 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        let Position_BaseRod3 = this.getFragmentWorldMatrixByNodeId(ID_BaseRod3).matrix[0].getPosition().clone();
        //print the returned value from getFragmentWorldMatrixByNodeId method and using this we can inspect the....
        // output of the fucntion(method) whether working or not
        console.log(Position_BaseRod3);
        Pivot_BaseRod3.position.x = 0;
        Pivot_BaseRod3.position.y = Position_BaseRod3.y;
        Pivot_BaseRod3.position.z = Position_BaseRod3.z;
        viewer.impl.scene.add(Pivot_BaseRod3);

        let Helper_LowerArmBody3 = new THREE.Mesh();
        let Position_LowerArmBody3 = this.getFragmentWorldMatrixByNodeId(ID_LowerArmBody3).matrix[0].getPosition().clone();
        Helper_LowerArmBody3.position.x = - Position_LowerArmBody3.x + Math.abs(Position_LowerArmBody3.x - Pivot_BaseRod3.position.x);
        Helper_LowerArmBody3.position.y = - Position_LowerArmBody3.y + Math.abs(Position_LowerArmBody3.y - Pivot_BaseRod3.position.y);
        Helper_LowerArmBody3.position.z = - Position_LowerArmBody3.z + Math.abs(Position_LowerArmBody3.z - Pivot_BaseRod3.position.z);
        Pivot_BaseRod3.add(Helper_LowerArmBody3);
        console.log(Position_LowerArmBody3);

         // /* ====================== right 4 ================= */
        let ID_BaseRod4 = 4874;
        let ID_LowerArmBody4 = 4874;

        let Pivot_BaseRod4 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        let Position_BaseRod4 = this.getFragmentWorldMatrixByNodeId(ID_BaseRod4).matrix[0].getPosition().clone();
        //print the returned value from getFragmentWorldMatrixByNodeId method and using this we can inspect the....
        // output of the fucntion(method) whether working or not
        console.log(Position_BaseRod4);
        Pivot_BaseRod4.position.x = 0;
        Pivot_BaseRod4.position.y = Position_BaseRod4.y;
        Pivot_BaseRod4.position.z = Position_BaseRod4.z;
        viewer.impl.scene.add(Pivot_BaseRod4);

        let Helper_LowerArmBody4 = new THREE.Mesh();
        let Position_LowerArmBody4 = this.getFragmentWorldMatrixByNodeId(ID_LowerArmBody4).matrix[0].getPosition().clone();
        Helper_LowerArmBody4.position.x = - Position_LowerArmBody4.x + Math.abs(Position_LowerArmBody4.x - Pivot_BaseRod4.position.x);
        Helper_LowerArmBody4.position.y = - Position_LowerArmBody4.y + Math.abs(Position_LowerArmBody4.y - Pivot_BaseRod4.position.y);
        Helper_LowerArmBody4.position.z = - Position_LowerArmBody4.z + Math.abs(Position_LowerArmBody4.z - Pivot_BaseRod4.position.z);
        Pivot_BaseRod4.add(Helper_LowerArmBody4);
        console.log(Position_LowerArmBody4);

         // /* ====================== right 5 ================= */
        let ID_BaseRod5 = 4881;
        let ID_LowerArmBody5 = 4881;

        let Pivot_BaseRod5 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        let Position_BaseRod5 = this.getFragmentWorldMatrixByNodeId(ID_BaseRod5).matrix[0].getPosition().clone();
        //print the returned value from getFragmentWorldMatrixByNodeId method and using this we can inspect the....
        // output of the fucntion(method) whether working or not
        console.log(Position_BaseRod5);
        Pivot_BaseRod5.position.x = 0;
        Pivot_BaseRod5.position.y = Position_BaseRod5.y;
        Pivot_BaseRod5.position.z = Position_BaseRod5.z;
        viewer.impl.scene.add(Pivot_BaseRod5);

        let Helper_LowerArmBody5 = new THREE.Mesh();
        let Position_LowerArmBody5 = this.getFragmentWorldMatrixByNodeId(ID_LowerArmBody5).matrix[0].getPosition().clone();
        Helper_LowerArmBody5.position.x = - Position_LowerArmBody5.x + Math.abs(Position_LowerArmBody5.x - Pivot_BaseRod5.position.x);
        Helper_LowerArmBody5.position.y = - Position_LowerArmBody5.y + Math.abs(Position_LowerArmBody5.y - Pivot_BaseRod5.position.y);
        Helper_LowerArmBody5.position.z = - Position_LowerArmBody5.z + Math.abs(Position_LowerArmBody5.z - Pivot_BaseRod5.position.z);
        Pivot_BaseRod5.add(Helper_LowerArmBody5);
        console.log(Position_LowerArmBody5);

        //  // /* ====================== left 0 ================= */
        let ID_BaseRod10 = 4894;
        let ID_LowerArmBody10 = 4894;

        let Pivot_BaseRod10 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        let Position_BaseRod10 = this.getFragmentWorldMatrixByNodeId(ID_BaseRod10).matrix[0].getPosition().clone();
        //print the returned value from getFragmentWorldMatrixByNodeId method and using this we can inspect the....
        // output of the fucntion(method) whether working or not
        console.log(Position_BaseRod10);
        Pivot_BaseRod10.position.x = 0;
        Pivot_BaseRod10.position.y = Position_BaseRod10.y;
        Pivot_BaseRod10.position.z = Position_BaseRod10.z;
        viewer.impl.scene.add(Pivot_BaseRod10);
        console.log(Pivot_BaseRod10);

        let Helper_LowerArmBody10 = new THREE.Mesh();
        let Position_LowerArmBody10 = this.getFragmentWorldMatrixByNodeId(ID_LowerArmBody10).matrix[0].getPosition().clone();
        Helper_LowerArmBody10.position.x =  Position_LowerArmBody10.x + Math.abs(Position_LowerArmBody10.x - Pivot_BaseRod10.position.x);
        Helper_LowerArmBody10.position.y =  -Position_LowerArmBody10.y + Math.abs(Position_LowerArmBody10.y - Pivot_BaseRod10.position.y);
        Helper_LowerArmBody10.position.z =  -Position_LowerArmBody10.z + Math.abs(Position_LowerArmBody10.z - Pivot_BaseRod10.position.z);
        Pivot_BaseRod10.add(Helper_LowerArmBody10);
        console.log(Position_LowerArmBody10);

         // /* ====================== left 1 ================= */
        let ID_BaseRod11 = 4901;
        let ID_LowerArmBody11 = 4901;

        let Pivot_BaseRod11= new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        let Position_BaseRod11 = this.getFragmentWorldMatrixByNodeId(ID_BaseRod11).matrix[0].getPosition().clone();
        //print the returned value from getFragmentWorldMatrixByNodeId method and using this we can inspect the....
        // output of the fucntion(method) whether working or not
        console.log(Position_BaseRod11);
        Pivot_BaseRod11.position.x = 0;
        Pivot_BaseRod11.position.y = Position_BaseRod11.y;
        Pivot_BaseRod11.position.z = Position_BaseRod11.z;
        viewer.impl.scene.add(Pivot_BaseRod11);
        console.log(Pivot_BaseRod11);

        let Helper_LowerArmBody11 = new THREE.Mesh();
        let Position_LowerArmBody11 = this.getFragmentWorldMatrixByNodeId(ID_LowerArmBody11).matrix[0].getPosition().clone();
        Helper_LowerArmBody11.position.x =  Position_LowerArmBody11.x + Math.abs(Position_LowerArmBody11.x - Pivot_BaseRod11.position.x);
        Helper_LowerArmBody11.position.y =  -Position_LowerArmBody11.y + Math.abs(Position_LowerArmBody11.y - Pivot_BaseRod11.position.y);
        Helper_LowerArmBody11.position.z =  -Position_LowerArmBody11.z + Math.abs(Position_LowerArmBody11.z - Pivot_BaseRod11.position.z);
        Pivot_BaseRod11.add(Helper_LowerArmBody11);
        console.log(Position_LowerArmBody11);

         // /* ====================== left 2 ================= */
        let ID_BaseRod12 = 4908;
        let ID_LowerArmBody12 = 4908;

        let Pivot_BaseRod12= new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        let Position_BaseRod12 = this.getFragmentWorldMatrixByNodeId(ID_BaseRod12).matrix[0].getPosition().clone();
        //print the returned value from getFragmentWorldMatrixByNodeId method and using this we can inspect the....
        // output of the fucntion(method) whether working or not
        console.log(Position_BaseRod12);
        Pivot_BaseRod12.position.x = 0;
        Pivot_BaseRod12.position.y = Position_BaseRod12.y;
        Pivot_BaseRod12.position.z = Position_BaseRod12.z;
        viewer.impl.scene.add(Pivot_BaseRod12);
        console.log(Pivot_BaseRod12);

        let Helper_LowerArmBody12 = new THREE.Mesh();
        let Position_LowerArmBody12 = this.getFragmentWorldMatrixByNodeId(ID_LowerArmBody12).matrix[0].getPosition().clone();
        Helper_LowerArmBody12.position.x =  Position_LowerArmBody12.x + Math.abs(Position_LowerArmBody12.x - Pivot_BaseRod12.position.x);
        Helper_LowerArmBody12.position.y =  -Position_LowerArmBody12.y + Math.abs(Position_LowerArmBody12.y - Pivot_BaseRod12.position.y);
        Helper_LowerArmBody12.position.z =  -Position_LowerArmBody12.z + Math.abs(Position_LowerArmBody12.z - Pivot_BaseRod12.position.z);
        Pivot_BaseRod12.add(Helper_LowerArmBody12);
        console.log(Position_LowerArmBody12);

         // /* ====================== left 3 ================= */
        let ID_BaseRod13 = 4915;
        let ID_LowerArmBody13 = 4915;

        let Pivot_BaseRod13= new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        let Position_BaseRod13 = this.getFragmentWorldMatrixByNodeId(ID_BaseRod13).matrix[0].getPosition().clone();
        //print the returned value from getFragmentWorldMatrixByNodeId method and using this we can inspect the....
        // output of the fucntion(method) whether working or not
        console.log(Position_BaseRod13);
        Pivot_BaseRod13.position.x = 0;
        Pivot_BaseRod13.position.y = Position_BaseRod13.y;
        Pivot_BaseRod13.position.z = Position_BaseRod13.z;
        viewer.impl.scene.add(Pivot_BaseRod13);
        console.log(Pivot_BaseRod13);

        let Helper_LowerArmBody13 = new THREE.Mesh();
        let Position_LowerArmBody13 = this.getFragmentWorldMatrixByNodeId(ID_LowerArmBody13).matrix[0].getPosition().clone();
        Helper_LowerArmBody13.position.x =  Position_LowerArmBody13.x + Math.abs(Position_LowerArmBody13.x - Pivot_BaseRod13.position.x);
        Helper_LowerArmBody13.position.y =  -Position_LowerArmBody13.y + Math.abs(Position_LowerArmBody13.y - Pivot_BaseRod13.position.y);
        Helper_LowerArmBody13.position.z =  -Position_LowerArmBody13.z + Math.abs(Position_LowerArmBody13.z - Pivot_BaseRod13.position.z);
        Pivot_BaseRod13.add(Helper_LowerArmBody13);
        console.log(Position_LowerArmBody13);

         // /* ====================== left 4 ================= */
        let ID_BaseRod14 = 4922;
        let ID_LowerArmBody14 = 4922;

        let Pivot_BaseRod14= new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        let Position_BaseRod14 = this.getFragmentWorldMatrixByNodeId(ID_BaseRod14).matrix[0].getPosition().clone();
        //print the returned value from getFragmentWorldMatrixByNodeId method and using this we can inspect the....
        // output of the fucntion(method) whether working or not
        console.log(Position_BaseRod14);
        Pivot_BaseRod14.position.x = 0;
        Pivot_BaseRod14.position.y = Position_BaseRod14.y;
        Pivot_BaseRod14.position.z = Position_BaseRod14.z;
        viewer.impl.scene.add(Pivot_BaseRod14);
        console.log(Pivot_BaseRod14);

        let Helper_LowerArmBody14 = new THREE.Mesh();
        let Position_LowerArmBody14 = this.getFragmentWorldMatrixByNodeId(ID_LowerArmBody14).matrix[0].getPosition().clone();
        Helper_LowerArmBody14.position.x =  Position_LowerArmBody14.x + Math.abs(Position_LowerArmBody14.x - Pivot_BaseRod14.position.x);
        Helper_LowerArmBody14.position.y =  -Position_LowerArmBody14.y + Math.abs(Position_LowerArmBody14.y - Pivot_BaseRod14.position.y);
        Helper_LowerArmBody14.position.z =  -Position_LowerArmBody14.z + Math.abs(Position_LowerArmBody14.z - Pivot_BaseRod14.position.z);
        Pivot_BaseRod14.add(Helper_LowerArmBody14);
        console.log(Position_LowerArmBody14);

         // /* ====================== left 5 ================= */
        let ID_BaseRod15 = 4929;
        let ID_LowerArmBody15 = 4929;

        let Pivot_BaseRod15= new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        let Position_BaseRod15 = this.getFragmentWorldMatrixByNodeId(ID_BaseRod15).matrix[0].getPosition().clone();
        //print the returned value from getFragmentWorldMatrixByNodeId method and using this we can inspect the....
        // output of the fucntion(method) whether working or not
        console.log(Position_BaseRod15);
        Pivot_BaseRod15.position.x = 0;
        Pivot_BaseRod15.position.y = Position_BaseRod15.y;
        Pivot_BaseRod15.position.z = Position_BaseRod15.z;
        viewer.impl.scene.add(Pivot_BaseRod15);
        console.log(Pivot_BaseRod15);

        let Helper_LowerArmBody15 = new THREE.Mesh();
        let Position_LowerArmBody15 = this.getFragmentWorldMatrixByNodeId(ID_LowerArmBody15).matrix[0].getPosition().clone();
        Helper_LowerArmBody15.position.x =  Position_LowerArmBody15.x + Math.abs(Position_LowerArmBody15.x - Pivot_BaseRod15.position.x);
        Helper_LowerArmBody15.position.y =  -Position_LowerArmBody15.y + Math.abs(Position_LowerArmBody15.y - Pivot_BaseRod15.position.y);
        Helper_LowerArmBody15.position.z =  -Position_LowerArmBody15.z + Math.abs(Position_LowerArmBody15.z - Pivot_BaseRod15.position.z);
        Pivot_BaseRod15.add(Helper_LowerArmBody15);
        console.log(Position_LowerArmBody15);

             // right side
        this.assignTransformations(Helper_LowerArmBody, ID_LowerArmBody);
        this.assignTransformations(Helper_LowerArmBody1, ID_LowerArmBody1);
        this.assignTransformations(Helper_LowerArmBody2, ID_LowerArmBody2);
        this.assignTransformations(Helper_LowerArmBody3, ID_LowerArmBody3);
        this.assignTransformations(Helper_LowerArmBody4, ID_LowerArmBody4);
        this.assignTransformations(Helper_LowerArmBody5, ID_LowerArmBody5);

           // Left side
        this.assignTransformations(Helper_LowerArmBody10, ID_LowerArmBody10);
        this.assignTransformations(Helper_LowerArmBody11, ID_LowerArmBody11);
        this.assignTransformations(Helper_LowerArmBody12, ID_LowerArmBody12);
        this.assignTransformations(Helper_LowerArmBody13, ID_LowerArmBody13);
        this.assignTransformations(Helper_LowerArmBody14, ID_LowerArmBody14);
        this.assignTransformations(Helper_LowerArmBody15, ID_LowerArmBody15);


        /* ====================== Link to controls ================= */

        let baseControlSlider = document.getElementById("baseControl");
        let firstControlSlider = document.getElementById("firstArm");
        let secondControlSlider = document.getElementById("secondArm");
        // let thirdControlSlider = document.getElementById("thirdArm");

        baseControlSlider.oninput = (event) => {
            Pivot_BaseRod.rotation.y = Math.PI/180 * event.target.value;
            Pivot_BaseRod1.rotation.y = Math.PI/180 * event.target.value;
            Pivot_BaseRod2.rotation.y = Math.PI/180 * event.target.value;
            Pivot_BaseRod3.rotation.y = Math.PI/180 * event.target.value;
            Pivot_BaseRod4.rotation.y = Math.PI/180 * event.target.value;
            Pivot_BaseRod5.rotation.y = Math.PI/180 * event.target.value;
            this.assignTransformations(Helper_LowerArmBody, ID_LowerArmBody);
            this.assignTransformations(Helper_LowerArmBody1, ID_LowerArmBody1);
            this.assignTransformations(Helper_LowerArmBody2, ID_LowerArmBody2);
            this.assignTransformations(Helper_LowerArmBody3, ID_LowerArmBody3);
            this.assignTransformations(Helper_LowerArmBody4, ID_LowerArmBody4);
            this.assignTransformations(Helper_LowerArmBody5, ID_LowerArmBody5);
            
            this.viewer.impl.sceneUpdated(true);
        };

        firstControlSlider.oninput = (event) => {
            Pivot_BaseRod10.rotation.y = Math.PI/180 * event.target.value;
            Pivot_BaseRod11.rotation.y = Math.PI/180 * event.target.value;
            Pivot_BaseRod12.rotation.y = Math.PI/180 * event.target.value;
            Pivot_BaseRod13.rotation.y = Math.PI/180 * event.target.value;
            Pivot_BaseRod14.rotation.y = Math.PI/180 * event.target.value;
            Pivot_BaseRod15.rotation.y = Math.PI/180 * event.target.value;

            this.assignTransformations(Helper_LowerArmBody10, ID_LowerArmBody10);
            this.assignTransformations(Helper_LowerArmBody11, ID_LowerArmBody11);
            this.assignTransformations(Helper_LowerArmBody12, ID_LowerArmBody12);
            this.assignTransformations(Helper_LowerArmBody13, ID_LowerArmBody13);
            this.assignTransformations(Helper_LowerArmBody14, ID_LowerArmBody14);
            this.assignTransformations(Helper_LowerArmBody15, ID_LowerArmBody15);
            
            this.viewer.impl.sceneUpdated(true);
        };
        secondControlSlider.oninput = (event) => {
            Pivot_BaseRod.rotation.y = Math.PI/180 * event.target.value;
            Pivot_BaseRod1.rotation.y = Math.PI/180 * event.target.value;
            Pivot_BaseRod2.rotation.y = Math.PI/180 * event.target.value;
            Pivot_BaseRod3.rotation.y = Math.PI/180 * event.target.value;
            Pivot_BaseRod4.rotation.y = Math.PI/180 * event.target.value;
            Pivot_BaseRod5.rotation.y = Math.PI/180 * event.target.value;
            this.assignTransformations(Helper_LowerArmBody, ID_LowerArmBody);
            this.assignTransformations(Helper_LowerArmBody1, ID_LowerArmBody1);
            this.assignTransformations(Helper_LowerArmBody2, ID_LowerArmBody2);
            this.assignTransformations(Helper_LowerArmBody3, ID_LowerArmBody3);
            this.assignTransformations(Helper_LowerArmBody4, ID_LowerArmBody4);
            this.assignTransformations(Helper_LowerArmBody5, ID_LowerArmBody5);

        
            Pivot_BaseRod10.rotation.y = Math.PI/-180 * event.target.value;
            Pivot_BaseRod11.rotation.y = Math.PI/-180 * event.target.value;
            Pivot_BaseRod12.rotation.y = Math.PI/-180 * event.target.value;
            Pivot_BaseRod13.rotation.y = Math.PI/-180 * event.target.value;
            Pivot_BaseRod14.rotation.y = Math.PI/-180 * event.target.value;
            Pivot_BaseRod15.rotation.y = Math.PI/-180 * event.target.value;
            this.assignTransformations(Helper_LowerArmBody10, ID_LowerArmBody10);
            this.assignTransformations(Helper_LowerArmBody11, ID_LowerArmBody11);
            this.assignTransformations(Helper_LowerArmBody12, ID_LowerArmBody12);
            this.assignTransformations(Helper_LowerArmBody13, ID_LowerArmBody13);
            this.assignTransformations(Helper_LowerArmBody14, ID_LowerArmBody14);
            this.assignTransformations(Helper_LowerArmBody15, ID_LowerArmBody15);

            this.viewer.impl.sceneUpdated(true);
        };


      


    }

    findNodeIdbyName(name) {
        let tree = this.tree;
        let nodeList = Object.values(tree.nodeAccess.dbIdToIndex);
        for (let i = 1, len = nodeList.length; i < len; ++i) {
            let node_name = tree.getNodeName(nodeList[i]);
            if (node_name === name) {
                return nodeList[i];
            }
        }
        return null;
    }

    getFragmentWorldMatrixByNodeId(nodeId) {
        let viewer = this.viewer;

        let result = {
            fragId: [],
            matrix: [],
        };
        this.tree.enumNodeFragments(nodeId, function (frag) {

            let fragProxy = viewer.impl.getFragmentProxy(viewer.model, frag);
            let matrix = new THREE.Matrix4();

            fragProxy.getWorldMatrix(matrix);

            result.fragId.push(frag);
            result.matrix.push(matrix);
        });
        return result;
    }

    assignTransformations(ref_obj, nodeId) {
        let viewer = this.viewer;

        ref_obj.parent.updateMatrixWorld();
        var position = new THREE.Vector3();
        var rotation = new THREE.Quaternion();
        var scale = new THREE.Vector3();
        ref_obj.matrixWorld.decompose(position, rotation, scale);

        this.tree.enumNodeFragments(nodeId, function (frag) {
            var fragProxy = viewer.impl.getFragmentProxy(viewer.model, frag);
            fragProxy.getAnimTransform();
            fragProxy.position = position;
            fragProxy.quaternion = rotation;
            fragProxy.updateAnimTransform();
        });
    }

    customize() {

        this.defaultState = this.viewer.getState();
        this.viewer.restoreState(someViewerState);
        this.viewer.impl.setPostProcessParameter("style", "edging");
        this.viewer.impl.setPostProcessParameter("depthEdges", false);
        this.viewer.setBackgroundColor(255,255,255,255,255,255);
        this.viewer.setGroundShadow(false);
        this.viewer.setGroundReflection(true);
        this.viewer.setTheme("light-theme");

    }

    createUI() {
        this.ui = document.createElement("div");
        this.ui.id = "control_area";
        this.ui.classList.add("docking-panel-container-solid-color-a");
        this.ui.innerHTML = `
            <div id="controlsArea">
                <div><span>Right wing: </span><input type="range" min="-40" max="0" value="0" class="slider" id="baseControl"></div>
                <div><span>Left Wing: </span><input type="range" min="0" max="40" value="0" class="slider" id="firstArm"></div>
                <div><span>All: </span><input type="range" min="-40" max="0" value="0" class="slider" id="secondArm"><type="range" min="0" max="40" value="0" class="slider" id="secondArm"></div>
            </div>
        `;

        let panel = this.panel;
        let viewer = this.viewer;
        
        let toolbarButtonRobot = new Autodesk.Viewing.UI.Button('RobotControl');

        if (panel == null) {
            panel = new RobotControlPanel(viewer, viewer.container,
                'controlPanel', 'Robot Control Panel', {"innerDiv":this.ui});
        }

        toolbarButtonRobot.onClick = (e) => {

            panel.setVisible(!panel.isVisible());
        };


        toolbarButtonRobot.addClass('toolbarButtonRobot');
        toolbarButtonRobot.setToolTip('Show/Hide Robot Controls');

        // SubToolbar
        this.subToolbar = new Autodesk.Viewing.UI.ControlGroup('ExtensionRobotControlToolbar');
        this.subToolbar.addControl(toolbarButtonRobot);

        this.viewer.toolbar.addControl(this.subToolbar);
    }
}

Autodesk.Viewing.theExtensionManager.registerExtension('RobotExtension',
    RobotExtension);


// *******************************************
// Robot Control Panel
// *******************************************
function RobotControlPanel(viewer, container, id, title, options) {
    this.viewer = viewer;

    Autodesk.Viewing.UI.DockingPanel.call(this, container, id, title, options);

    // the style of the docking panel
    // use this built-in style to support Themes on Viewer 4+
    this.container.classList.add('docking-panel-container-solid-color-a');
    this.container.id = "robotControlPanelContainer";

    this.container.appendChild(options.innerDiv);

}
RobotControlPanel.prototype = Object.create(Autodesk.Viewing.UI.DockingPanel.prototype);
RobotControlPanel.prototype.constructor = RobotControlPanel;


const someViewerState = {
    "seedURN": "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YWI5Mi90dW5ubmVsa2luZXRpY3NpeGtob2RhbS5ydnQ",
    "objectSet": [
        {
            "id": [],
            "isolated": [],
            "hidden": [],
            "explodeScale": 0,
            "idType": "lmv"
        }
    ],
    "viewport": {
        "name": "",
        "eye": [
            204.48330126505937,
            100.3164039523009,
            182.73839807077565
        ],
        "target": [
            1.0011920928955078,
            2.052783966064453,
            0
        ],
        "up": [
            -0.25157238314283936,
            0.9410997291372207,
            -0.2259261734675335
        ],
        "worldUpVector": [
            0,
            1,
            0
        ],
        "pivotPoint": [
            1.0011920928955078,
            2.052783966064453,
            0
        ],
        "distanceToOrbit": 290.6097553342371,
        "aspectRatio": 1.3423517169614985,
        "projection": "perspective",
        "isOrthographic": false,
        "fieldOfView": 22.61986532341139
    },
    "renderOptions": {
        "environment": "(Custom: Model defined)",
        "ambientOcclusion": {
            "enabled": true,
            "radius": 5.945260721973842,
            "intensity": 0.4
        },
        "toneMap": {
            "method": 1,
            "exposure": -8.974,
            "lightMultiplier": -1e-20
        },
        "appearance": {
            "ghostHidden": true,
            "ambientShadow": true,
            "antiAliasing": true,
            "progressiveDisplay": true,
            "swapBlackAndWhite": false,
            "displayLines": true,
            "displayPoints": true
        }
    },
    "cutplanes": []
};