/* Used to create extend, extendOwn and defaults.
 *
 * |Name    |Type    |Desc                          |
 * |--------|--------|------------------------------|
 * |keysFn  |function|Function to get object keys   |
 * |defaults|boolean |No override when set to true  |
 * |return  |function|Result function, extend...    |
 */

_('isUndef each');

function exports(keysFn, defaults)
{
    return function (obj)
    {
        each(arguments, function (src, idx)
        {
            if (idx === 0) return;

            var keys = keysFn(src);

            each(keys, function (key)
            {
                if (!defaults || isUndef(obj[key])) obj[key] = src[key];
            });
        });

        return obj;
    };
}