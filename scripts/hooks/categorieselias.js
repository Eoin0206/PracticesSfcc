importPackage( dw.system );

exports.beforeGET = function(category,doc)
{

    var hookcategory = category;
    var hookdocs = doc;

    return new Status(Status.OK);
}

exports.modifyGETResponse = function(category,doc)
{
    return new Status(Status.OK);
}