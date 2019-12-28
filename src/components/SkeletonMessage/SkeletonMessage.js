import React from 'react';
import Skeleton from "@material-ui/lab/Skeleton";

const SkeletonMessage = () => {
	return (
		<div style={{display:"flex", padding:"10px"}}>
			<div>
				<Skeleton variant="circle" width={40} height={40} />
			</div>
			<div style={{width:"100%", paddingLeft:"10px"}}>
				<div style={{paddingBottom:"10px"}}><Skeleton variant="rect" width={150} height={20} /></div>
				<Skeleton variant="rect" width={"100%"} height={50} />
			</div>
		</div>
	);
};

export default SkeletonMessage;
