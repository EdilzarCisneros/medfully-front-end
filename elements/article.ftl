<article class="show-lines m-article">

    <#if headerImage.getData()?? && headerImage.getData() != "">
        <div class="container-fluid m-article__heading"
             style="background-image: url('${headerImage.getData()}')">

            <div class="container">
                <div class="row">
                    <div class="m-article__headings col-sm-8 col-sm-offset-2">
                        <h1>${displayTitle.getData()}</h1>
                        <h5>${teaser.getData()}</h5>
                    </div>
                </div>
            </div>

        </div>
    </#if>

    <div class="container">
        <div class="row">
            <div class="col-md-2 m-author text-center">
                <div class="row">
                    <div class="col-xs-2 col-sm-2 col-md-12">
                        <div class="m-author__thumbnail"></div>
                    </div>
                    <div class="col-xs-10 col-sm-10 col-md-12 m-author__info">
                        <div class="m-author__name">
                            Priscila Mendoza
                        </div>
                        <div class="m-author__summary">
                            M.D. with more than 15 years of experience treating chronic pain patients.
                        </div>
                        <div class="m-author__date">
                            Jul 6, 2018
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <p class="m-article__summary">
                ${summary.getData()}
                </p>

                <#list section.getSiblings() as section >

                    <#assign sectionQuote = section.blockquote >
                    <#assign sectionImage = section.sectionImage >

                    <section class="m-article__section">
                        <h2 class="m-article__section-title">
                            ${ section.sectionTitle.getData() }
                        </h2>
                        <p class="m-article__section-body">
                            ${ section.body.getData() }
                        </p>

                        <#if sectionQuote.getData()?? && sectionQuote.getData() != "">
                        <div class="m-article__section-quote">
                            ${ sectionQuote.getData() }
                        </div>
                        </#if>

                        <#if sectionImage.getData()?? && sectionImage.getData() != "">
                        <div class="m-article__section-image"
                             style="background-image: url('${ sectionImage.getData() }')"></div>
                        <div class="m-article__section-image-alt">
                            ${sectionImage.getAttribute("alt")}
                        </div>
                        </#if>
                    </section>
                </#list>

            </div>
        </div>
    </div>
</article>