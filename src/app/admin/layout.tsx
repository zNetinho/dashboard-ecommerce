import React from "react";

export default function DashboardLayout({
    children
}: {
  children: React.ReactNode;
}) {
    return (
        <div>
            {children}
        </div>
    );
}

// export const getServerSideProps = async (ctx) => {
//   console.log(ctx.req.cookies)
//    return {
//     props: {}
// }
// } 
