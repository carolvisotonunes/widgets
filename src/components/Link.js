import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if(event.metaKey || event.ctrlKey){
        return;
    }
    event.preventDefault();//prevent to reload  the full page
    window.history.pushState({},'',href);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);//communicate over to those root components that URl has just changed
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
