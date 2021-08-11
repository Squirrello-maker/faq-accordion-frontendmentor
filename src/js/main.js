const accordion = document.querySelector('.accordion');
const accordionBtns = accordion.querySelectorAll('.accordion__item__btn');
const accordionInfos = accordion.querySelectorAll('.accordion__item__info');

function openAccordionItem()
{
    if(this.nextElementSibling.classList.contains('active-item'))
    {
        this.nextElementSibling.classList.remove('active-item');
        this.classList.remove('bold');
    }
    else
    {    
        closeActiveItems();
        this.nextElementSibling.classList.toggle('active-item');
        this.classList.add('bold');
    }

    
}
const closeActiveItems = () => {
    accordionInfos.forEach(info => {
        info.classList.remove('active-item');
    });
    accordionBtns.forEach(btn => {
        if(btn.classList.contains('bold'))
        {
            btn.classList.remove('bold');
        }    
    })
}
accordionBtns.forEach(btn => {
    btn.addEventListener('click', openAccordionItem);
});
