
$("#appMountPoint").bind('DOMSubtreeModified', mark)

function mark(evt)
{
    images = document.querySelectorAll('.watch-title, .slider-refocus')

    for(i = 0; i < images.length; i++)
    {

        if(data[images[i].ariaLabel] === true)
        {
            if( document.querySelector('.skull[aria-label="' + images[i].ariaLabel + '"]' ) === null )
            {
                var skull = document.createElement('span')
                skull.innerText= "💀"
                skull.classList.add('skull')
                skull.ariaLabel = images[i].ariaLabel
                images[i].classList.add("desaturate")
                images[i].append(skull)

            }
        }
    }
}
